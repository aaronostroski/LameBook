class AddPostIdToPostsLikes < ActiveRecord::Migration[7.0]
  def change
    add_column :posts_likes, :post_id, :integer
  end
end
