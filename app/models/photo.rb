# == Schema Information
#
# Table name: photos
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :user_id, :title, presence: true

  validate :ensure_photo

  has_one_attached :attachedPhoto

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << 'must be attached'
    end
  end
end
