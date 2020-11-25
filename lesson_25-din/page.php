<?php get_header(); ?>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <?php 

        $image = get_field('avatar');

        if(!empty($image)): ?>

        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

        <?php endif; ?>
        <div class="intro-text">
          <span class="name"><?php bloginfo('title'); ?></span>
          <hr class="star-light">
          <span class="skills"><?php bloginfo('description'); ?></span>
        </div>
      </div>
    </header>

<?php get_footer(); ?>