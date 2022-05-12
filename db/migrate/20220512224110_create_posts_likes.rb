class CreatePostsLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :posts_likes do |t|

      t.timestamps
    end
  end
end
