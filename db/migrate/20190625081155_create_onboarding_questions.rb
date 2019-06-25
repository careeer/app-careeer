class CreateOnboardingQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :onboarding_questions do |t|
      t.string :question
      t.string :answer
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
