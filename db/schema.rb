# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160223172204) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: true do |t|
    t.string   "phone"
    t.string   "name"
    t.integer  "product_id"
    t.string   "facebook"
    t.text     "address"
    t.integer  "quantity"
    t.integer  "price"
    t.text     "instruction"
    t.title    "product_title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "category"
    t.string   "image_url"
    t.integer  "quantity"
    t.integer  "price"
    t.string   "unit"
    t.boolean  "isNew"
    t.integer  "likeNo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "quotes", force: true do |t|
    t.string   "author"
    t.text     "content"
    t.string   "hashtags"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tweet_respond_histories", force: true do |t|
    t.string   "respond_status_id"
    t.string   "tweet_text"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "yandex_languages", force: true do |t|
    t.string   "code"
    t.string   "language"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
