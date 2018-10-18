# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  width       :integer
#  height      :integer
#  description :text
#

class Photo < ApplicationRecord
  validates :user_id, :title, presence: true

  has_one_attached :attachedPhoto

  after_initialize :set_width, :set_height

  def set_width
    self.width ||= ActiveStorage::Analyzer::ImageAnalyzer
      .new(self.attachedPhoto)
      .metadata[:width].to_i
  end

  def set_height
    self.height ||= ActiveStorage::Analyzer::ImageAnalyzer
      .new(self.attachedPhoto)
      .metadata[:height].to_i
  end
end
