class V1::ClientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :duplicate, :destroy, :roadmap, :build_roadmap_element]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.all.order('created_at')
    render json: @clients, status: :ok
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    render json: @client, status: :ok
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)

    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
    if @client.update(client_params)
      head(:ok)
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def duplicate
    @new_client = @client.amoeba_dup
    @new_client.update(name: params[:new_name])
    if  @new_client.save!
      head(:ok)
    else
      render json: @new_client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    if @client.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.friendly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def client_params
      params.require(:client).permit(:name, :email, :avatar, :vision, :slug, :client_status, :new_name, :created_at, :updated_at)
    end

end
