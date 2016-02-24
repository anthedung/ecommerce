json.array!(@products) do |product|
  json.extract! product, :id, :title, :description, :category, :image_url, :quantity, :price, :unit, :isNew, :likeNo
  json.url product_url(product, format: :json)
end
