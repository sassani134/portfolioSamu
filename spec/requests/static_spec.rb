require 'rails_helper'

RSpec.describe "Statics", type: :request do
  describe "GET /cv" do
    it "returns http success" do
      get "/static/cv"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /link" do
    it "returns http success" do
      get "/static/link"
      expect(response).to have_http_status(:success)
    end
  end

end
