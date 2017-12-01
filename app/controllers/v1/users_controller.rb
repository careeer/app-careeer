# frozen_string_literal: true

module V1
  # User endpoints
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        render :create, status: :created
      else
        head(:unprocessable_entity)
      end
    end

    def forgot
      @user = User.find_by(email: params[:email])
      if @user.present?
        @user.send_reset_password_instructions
        head(:ok)
      else
        head(:not_found)
      end
    end

    def reset
      @user = User.with_reset_password_token(params[:reset_password_token])
      if @user.present?
        if @user.reset_password(params[:password], params[:password_confirmation])
          head(:ok)
        else
          head(:unprocessable_entity)
          @user.errors.full_messages
        end
      else
        head(:not_found)
      end
    end

    def check
      @user = User.find_by(email: params[:email])
      if @user.present?
        head(:ok)
      else
        head(:not_found)
      end
    end

    private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :reset_password_token)
    end
  end
end
