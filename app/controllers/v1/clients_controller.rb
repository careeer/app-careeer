class V1::ClientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :duplicate, :destroy]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.all.order('created_at')
    render :index, status: :ok
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    render :create, status: :ok
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = current_user.clients.build(client_params)

    if @client.save
      render :create, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def duplicate
    @new_client = @client.amoeba_dup
    @new_client.update(name: params[:new_name])
    @new_client.roadmap_elements.update_all(status: nil)
    if  @new_client.save!
      render :duplicate, status: :ok
    else
      render json: @new_client.errors, status: :unprocessable_entity
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
      if current_user.admin?
        @client = Client.friendly.find(params[:id])
      else
        @client = current_user.clients.last
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def client_params
      params.require(:client).permit(:name, :email, :avatar, :vision, :slug, :client_status, :new_name, :account_type)
    end

end
