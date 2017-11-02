# frozen_string_literal: true
module V1
  # Roadmap Elements endpoints
  class RoadmapElementsController < ApplicationController
  before_action :set_client

    def index
      @roadmap_elements = @client.roadmap_elements.order('dnd_index')
      render :index, status: :ok
    end

    def create
      @roadmap_element = @client.roadmap_elements.build(roadmap_element_params)
      if @roadmap_element.save
        render :create, status: :created
      else
        head(:unprocessable_entity)
      end
    end

    def update
      @roadmap_element = @client.roadmap_elements.where(id: params[:id]).first

      if @roadmap_element.update(roadmap_element_params)
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    def destroy
      @roadmap_element = @client.roadmap_elements.where(id: params[:id]).first
      if @roadmap_element.destroy
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

      def roadmap_element_params
        params.require(:roadmap_element).permit(:card_type, :title, :description, :call_to_action, :call_to_action_url, :status, :due_date, :dnd_index, :color)
      end
  end
end
