class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :email
      t.string :password_digest
      t.bigint :phone_number
      t.string :current_company
      t.bigint :current_ctc
      t.string :current_role
      t.string :about
      t.string :profile_picture
      t.timestamps
    end
  end
end
