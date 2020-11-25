<?php
/*
Template Name: Главная страница
*/
?>

<?php get_header(); ?>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <?php the_field('avatar', 2) ?>
        <div class="intro-text">
          <span class="name"><?php bloginfo('title'); ?></span>
          <hr class="star-light">
          <span class="skills"><?php bloginfo('description'); ?></span>
        </div>
      </div>
    </header>

<?php get_footer(); ?>