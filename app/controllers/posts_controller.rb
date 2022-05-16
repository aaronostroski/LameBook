class PostsController < ApplicationController
    before_action :authenticate_user!

    def create
        postData = {user_id: current_user.id, text: params[:text]}
        @posts = Post.new(postData)
        @posts.image.attach(params[:image])
        
        if @posts.save
            redirect_to root_path, notice: "Post created successfully"
        else
            redirect_to root_path, notice: "A error happens when you try to created the post, try again later!"      
        end 
    end
end
