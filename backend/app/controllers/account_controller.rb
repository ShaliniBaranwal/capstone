require 'bcrypt'

class AccountController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        current_user = Account.find_by('email': session[:user_email])

        if (current_user.nil?)
            render json: { :success => false, :message => "Please log in." }
        else
            render json: current_user
        end
    end

    def update
        current_user = Account.find(params[:id])

        if (current_user.nil?)
            render json: { :success => false, :message => "User does not exist." }
        end

        current_user.update(
            'email': params[:email],
            'password': params[:password],
            'phone_number': params[:phone_number],
            'current_company': params[:current_company],
            'current_ctc': params[:current_ctc],
            'current_role': params[:current_role],
            'about': params[:about],
            'profile_picture': params[:profile_picture],
        )

        render json: { :success => true, :message => "Updated account successfully." }
    end

    def create
        Account.create(
            'email': params[:email],
            'password': params[:password],
            'phone_number': params[:phone_number],
            'current_company': params[:current_company],
            'current_ctc': params[:current_ctc],
            'current_role': params[:current_role],
            'about': params[:about],
            'profile_picture': params[:profile_picture],
        )

        render json: { :success => true }
    end

    def destroy
        user = Account.find(params[:id])
        user.destroy

        render json: { :success => true, :message => "Deleted the account successfully." }
    end
end
