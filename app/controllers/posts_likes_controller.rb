class PostsLikesController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token

    def create
        postLikesData = {user_id: current_user.id, post_id: params[:post_id]}
        @postsLikes = PostsLike.new(postLikesData)

        if @postsLikes.save
            @posts = Post.find(params[:post_id])
            @posts.likes = @posts.likes + 1;
            @posts.save
            
            render json: { response: @posts.likes }, status: 200
        else
            render json: { response: "Failed to process the request" }, status: 400
        end
    end

    def destroy
        postLikesData = {user_id: current_user.id, post_id: params[:id]}

        if PostsLike.where(postLikesData).destroy_all
            @posts = Post.find(params[:id])
            @posts.likes = @posts.likes - 1;
            @posts.save

            render json: { response: @posts.likes }, status: 200
        end
    end
end
