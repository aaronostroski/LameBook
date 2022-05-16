class TimelineController < ApplicationController
  def index
    @posts = Post.order("created_at DESC")

    if :current_user
      @postsLikes = PostsLike.all
    end
  end
end
