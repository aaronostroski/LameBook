class PostsController < ApplicationController
    before_action :authenticate_user!

    def create
        postData = {user_id: current_user.id, text: params[:text]}
        @posts = Post.new(postData)
        @posts.image.attach(params[:image])
        
        if @posts.save
            redirect_to timeline_path, status: 302, notice: "Post created successfully"
        else
            redirect_to timeline_path, status: 400, notice: "You need write a text to publish a post!"      
        end
    end
end
