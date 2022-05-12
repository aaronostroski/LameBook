class AddUserIdToPostsLikes < ActiveRecord::Migration[7.0]
  def change
    add_column :posts_likes, :user_id, :integer
  end
end
