class Client < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  has_many :roadmap_elements, dependent: :destroy
  accepts_nested_attributes_for :roadmap_elements

  private
  def should_generate_new_friendly_id?
    slug.nil? || name_changed?
  end

end
