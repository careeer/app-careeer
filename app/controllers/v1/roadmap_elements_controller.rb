class V1::RoadmapElementsController < ApplicationController
before_action :set_client

  def index
    @roadmap_elements = @client.roadmap_elements
    render json: @roadmap_elements, status: :ok
  end

  def create
    @roadmap_element = @client.roadmap_elements.build(roadmap_element_params)
    if @roadmap_element.save
      render json: @roadmap_element, status: :created
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
      @client = Client.friendly.find(params[:client_id])
    end

    def roadmap_element_params
      params.require(:roadmap_element).permit(:card_type, :title, :description, :call_to_action, :call_to_action_url, :status)
    end

end
