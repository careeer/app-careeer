class Client < ApplicationRecord
  extend FriendlyId
  friendly_id :name_url, use: :slugged
  has_many :roadmap_elements, dependent: :destroy
  accepts_nested_attributes_for :roadmap_elements

  def name_url
    "#{name.downcase.gsub(/\s/,'')}"
  end

  amoeba do
    enable
  end
  
  private
  def should_generate_new_friendly_id?
    slug.nil? || name_changed?
  end

end
