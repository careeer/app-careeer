# frozen_string_literal: true
module V1
  # Onboarding Questions endpoints
  class OnboardingQuestionsController < ApplicationController
  before_action :set_client
  before_action :set_paper_trail_whodunnit

    def index
      @onboarding_questions = @client.onboarding_questions.order('created_at')
      render :index, status: :ok
    end

    def create
      @onboarding_question = @client.onboarding_questions.build(onboarding_question_params)
      if @onboarding_question.save
        render :create, status: :created
      else
        head(:unprocessable_entity)
      end
    end

    def update
      @onboarding_question = @client.onboarding_questions.where(id: params[:id]).first

      if @onboarding_question.update(onboarding_question_params)
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    def destroy
      @onboarding_question = @client.onboarding_questions.where(id: params[:id]).first
      if @onboarding_question.destroy
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    private
      def set_client
        if current_user.try(:admin?)
          @client = Client.friendly.find(params[:client_id])
        else
          @client = current_user.clients.first
        end
      end

      def onboarding_question_params
        params.require(:onboarding_question).permit(:question, :answer)
      end
  end
end
