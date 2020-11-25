<?php
/*
Template Name: Контакты
*/
?>

<?php get_header(); ?>

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

<!-- Contact Section -->
<section id="contact">
  <div class="container">
    <h2 class="text-center">Contact Me</h2>
    <hr class="star-primary">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
        <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
        <form name="sentMessage" id="contactForm" novalidate>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Name</label>
              <input class="form-control" id="name" type="text" placeholder="Name" required data-validation-required-message="Please enter your name.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input class="form-control" id="email" type="email" placeholder="Email Address" required data-validation-required-message="Please enter your email address.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Phone Number</label>
              <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required data-validation-required-message="Please enter your phone number.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea class="form-control" id="message" rows="5" placeholder="Message" required data-validation-required-message="Please enter a message."></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>