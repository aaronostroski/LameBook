class PostsLike < ApplicationRecord
    belongs_to :user, :post
end
