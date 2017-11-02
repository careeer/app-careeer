# frozen_string_literal: true

module V1
  # Sessions endpoints
  class SessionsController < ApplicationController
    def show
      if current_user
        @user = current_user
        render :create, status: :ok
      else
        head(:unauthorized)
      end
    end

    # Sign In
    def create
      @user = User.where(email: params[:email]).first

      if @user&.valid_password?(params[:password])
        render :create, status: :created
      else
        head(:unauthorized)
      end
    end

    # Sign out
    def destroy
      current_user&.authentication_token = nil
      if current_user&.save
        head(:ok)
      else
        head(:unauthorized)
      end
    end
  end
end
