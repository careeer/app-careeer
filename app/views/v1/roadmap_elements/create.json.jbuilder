json.data do
  json.user do
    json.partial! 'v1/roadmap_elements/roadmap_element', roadmap_element: @roadmap_element
  end
end
