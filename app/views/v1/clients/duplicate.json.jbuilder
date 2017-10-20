json.data do
  json.user do
    json.partial! 'v1/clients/client', client: @new_client
  end
end
