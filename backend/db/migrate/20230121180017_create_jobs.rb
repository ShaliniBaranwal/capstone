class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :description
      t.string :company
      t.string :ctc
      t.string :role
      t.string :applied
      t.string :shortlisted
      t.string :offered
      t.string :location
      t.string :skills
      t.timestamps
    end
  end
end
