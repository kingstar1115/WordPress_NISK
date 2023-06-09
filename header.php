<?php

	// $attr = is_home() || is_front_page() ? 'website' : 'article';

	// if (is_home()) {
	// 	$canonical_url  = get_bloginfo('url');
	// } elseif (is_category()) {
	// 	$canonical_url=get_category_link(get_query_var('cat'));
	// } elseif (is_page() || is_single()) { 
	// 	$canonical_url = get_permalink();
	// 		} if ( $paged >= 2 || $page >= 2) {
	// 	$canonical_url = $canonical_url.'page/'.max( $paged, $page ).'/';
	// } elseif(is_404()) {
	// 	$canonical_url =  get_bloginfo('url')."/404";
	// } else {
	// 	$canonical_url  = get_bloginfo('url');
	// };

    // echo $canonical_url;

?>
<?php 
    $theme = get_page_uri()=="who_we_are"?"black":"white";
    $logoName = get_page_uri()=="who_we_are"?"logo.png":"Nisk-logo_white.png";
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head
    prefix="og: og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# <?php echo $attr?>: http://ogp.me/ns/<?php echo $attr?>#">

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="format-detection" content="email=no,telephone=no,address=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="keywords" content="ここにキーワードを設定します。">
    <meta name="robots" content="index,follow">

    <link rel="canonical" href="<?php echo $canonical_url; ?>">

    <link href="<?php echo get_template_directory_uri()?>/assets/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/index.css" type="text/css">
    <script src="<?php echo get_template_directory_uri()?>/assets/js/bootstrap.bundle.min.js"></script>
    <?php wp_head(); ?>


</head>

<body class="">
    <section class="nisk_navbar">
        <div class="nav-container">
            <nav class="navbar my-nab navbar-expand-lg navbar-light bg-transparent" style="">
                <div class="container-fluid ">
                    <!-- <a class="navbar-brand" href="#"><img
                            src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo.png"
                            class="logo" /></a> -->

                    <a class="navbar-brand" href="<?php echo esc_url(home_url()); ?>"><img
                            src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/<?php echo $logoName?>"
                            class="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- collapse navbar-collapse  -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="color:white">
                            <li class="nav-item <?php if(get_page_uri() == '') echo 'nav-active'; ?>">
                                <a class="nav-link active" style="color:<?php echo $theme?>" aria-current="page"
                                    href="<?php echo esc_url(home_url()); ?>">
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item <?php if(get_page_uri() == 'who_we_are') echo 'nav-active'; ?>">
                                <a class="nav-link" style="color:<?php echo $theme?>"
                                    href="<?php echo esc_url(home_url()); ?>/who_we_are">WHO WE ARE</a>
                            </li>
                            <li class="nav-item <?php if(get_page_uri() == 'what_we_do') echo 'nav-active'; ?>">
                                <a class="nav-link" style="color:<?php echo $theme?>"
                                    href="<?php echo esc_url(home_url()); ?>/what_we_do">WHAT WE DO</a>
                            </li>
                            <li class="nav-item <?php if(get_page_uri() == 'talk_to_us') echo 'nav-active'; ?>">
                                <a class="nav-link" style="color:<?php echo $theme?>"
                                    href="<?php echo esc_url(home_url()); ?>/talk_to_us">TALK TO US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>

    <body <?php body_class(); ?>>