class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :description
      t.string :company
      t.string :ctc
      t.string :role
      t.boolean :applied
      t.boolean :shortlisted
      t.boolean :offered
      t.string :location
      t.string :skills, array: true, default: []
      t.timestamps
    end
  end
end
