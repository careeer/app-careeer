class RoadmapElement < ApplicationRecord
  belongs_to :client
  has_paper_trail
end
