json.data do
  json.array! @clients do |client|
    json.partial! 'v1/clients/client', client: client
    json.complete client.roadmap_elements.where(status: true).count
    json.incomplete client.roadmap_elements.where(status: false).count
  end
end
