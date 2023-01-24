class DeleteController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        account = Account.find_by('email': params[:email])
        profile = Profile.find_by('email': params[:email])

        account.destroy
        profile.destroy

        render json: { :success => true, :message => "Deleted account & profile successfully." }
    end
end