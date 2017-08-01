class V1::RoadmapElementsController < ApplicationController

  def index
    @roadmap_elements = RoadmapElement.all

    render json: @roadmap_elements, status: :ok
  end

  def create
    @roadmap_element = RoadmapElement.new(roadmap_element_params)

    @roadmap_element.save
    render json: @roadmap_element, status: :created
  end

  def update
    @roadmap_element = RoadmapElement.where(id: params[:id]).first

    if @roadmap_element.update(roadmap_element_params)
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  def destroy
    @roadmap_element = RoadmapElement.where(id: params[:id]).first
    if @roadmap_element.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end


  private

    def roadmap_element_params
      params.require(:roadmap_element).permit(:card_type, :title, :description, :call_to_action, :call_to_action_url, :status, :name)
    end

end
