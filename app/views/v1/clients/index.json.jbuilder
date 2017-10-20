json.data do
  json.array! @clients do |client|
    json.partial! 'v1/clients/client', client: client
  end
end
