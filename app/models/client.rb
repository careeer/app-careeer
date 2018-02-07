class Client < ApplicationRecord
  belongs_to :user, optional: true
  extend FriendlyId
  friendly_id :name_url, use: :slugged
  has_many :roadmap_elements, dependent: :destroy
  accepts_nested_attributes_for :roadmap_elements

  amoeba do
    enable
    nullify :avatar
    nullify :vision
    nullify :email
  end

  def name_url
    "#{name.to_s.downcase.gsub(/\s/,'')}"
  end

  private
  def should_generate_new_friendly_id?
    slug.nil? || name_changed?
  end

end
