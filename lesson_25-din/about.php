<?php
/*
Template Name: Обо мне
*/
?>

<?php get_header(); ?>

<!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <?php 

        $image = get_field('avatar');

        if(!empty($image)): ?>

        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

        <?php endif; ?>
          <span class="name"><?php bloginfo('title'); ?></span>
          <hr class="star-light">
          <span class="skills"><?php bloginfo('description'); ?></span>
        </div>
      </div>
    </header>

<!-- About Section -->
<section class="success" id="about">
  <div class="container">
    <h2 class="text-center">About</h2>
    <hr class="star-light">
    <div class="row">
      <div class="col-lg-4 ml-auto">
        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
      </div>
      <div class="col-lg-4 mr-auto">
        <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
      </div>
      <div class="col-lg-8 mx-auto text-center">
        <a href="#" class="btn btn-lg btn-outline">
          <i class="fa fa-download"></i>
          Download Theme
        </a>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>