Rails.application.routes.draw do
  resources :orders

  resources :products

  #products
  get ProductsController::Home_Page, to: 'products#index'
  get ProductsController::Home_Page+'/new', to: 'products#new'
  post ProductsController::Home_Page, to: 'products#create'
  get ProductsController::Home_Page+':id', to: 'products#show'
  get ProductsController::Home_Page+':id/edit', to: 'products#edit'
  patch ProductsController::Home_Page+':id', to: 'products#update'
  get ProductsController::Home_Page+'/:id/x', to: 'products#destroy'

  #products
  get OrdersController::Home_Page, to: 'orders#index'
  get OrdersController::Home_Page+'/new', to: 'orders#new'
  post OrdersController::Home_Page, to: 'orders#create'
  get OrdersController::Home_Page+':id', to: 'orders#show'
  get OrdersController::Home_Page+':id/edit', to: 'orders#edit'
  patch OrdersController::Home_Page+':id', to: 'orders#update'
  get OrdersController::Home_Page+'/:id/x', to: 'orders#destroy'


  scope '/api' do
    resources :quotes, defaults: {format: :json}
    resources :products, defaults: {format: :json}
    resources :orders, defaults: {format: :json}

  end

  scope '/quanli' do
    resources :quotes, defaults: {format: :html}
    resources :products, defaults: {format: :html}
    resources :orders, defaults: {format: :html}

  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'quotes#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
