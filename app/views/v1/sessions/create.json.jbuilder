json.data do
  json.user do
    json.call(
      @user,
      :email,
      :admin,
      :authentication_token
    )
  end
end
