class AddForeingKeyPostToPostsLikes < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :posts_likes, :posts
  end
end
