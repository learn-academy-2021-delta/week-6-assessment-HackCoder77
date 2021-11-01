# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#set the class and the controller
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #show all blog posts
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #find blog post by id number
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #make new post
  def new
    @post = Post.new
  end

  def create
    # ---5)
    #create blog post and if post is valid add to post otherwise sent to different blog post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #find blog post by id
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update blog post if post is valid otherwise or go to edit blog post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #redirect link to blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  private
  # a private blog post that only you can see
  def blog_post_params
    # ---10)
    #blog post must include title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
