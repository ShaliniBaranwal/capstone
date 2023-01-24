class UpdateController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        account = Account.find_by('email': params[:email])
        profile = Profile.find_by('email': params[:email])

        exists = !(account.nil?) && (!profile.nil?)

        if (exists)
            account.update(
                "password_digest": params[:password_digest],
                "phone_number": params[:phone_number],
                "creationDate": params[:creationDate],
                "userType": params[:userType]
            )

            profile.update(
                "firstName": params[:firstName],
                "lastName": params[:lastName],
                "contact": params[:contact],
                "address": params[:address],
                "about": params[:about],
                "profilePic": params[:profilePic],
                "currentCompany": params[:currentCompany],
                "ctc": params[:ctc],
                "currentRole": params[:currentRole],
                "experience": params[:experience],
                "skills": params[:skills],
                "resumeLink": params[:resumeLink],
                "expectedSalary": params[:expectedSalary],
                "preferredLocation": params[:preferredLocation],
            )

            render json: { :success => true, :message => "Updated account & profile successfully." }
        else
            render json: { :success => false, :message => "Invalid EMail was passed in." }
        end
    end
end
