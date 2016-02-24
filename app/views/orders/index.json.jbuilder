json.array!(@orders) do |order|
  json.extract! order, :id, :phone, :name, :product_id, :facebook, :address, :quantity, :price, :instruction
  json.url order_url(order, format: :json)
end
