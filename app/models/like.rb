# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  photo_id   :string           not null
#  user_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :photo_id, :user_id presence: true

  belongs_to :user
  belongs_to :photo
end
