class PostsController < ApiController
  def index
    @posts = Post.all
    render json: @posts.to_json
  end

  def show
    @post = Post.find(params[:id])
    render json: @post.to_json
  end
end
