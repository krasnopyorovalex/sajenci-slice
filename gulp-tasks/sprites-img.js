"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import merge from "merge-stream";
import spritesmith from "gulp.spritesmith";

gulp.task("sprites-img", () => {
    // Generate our spritesheet
    let spriteData = gulp.src(paths.spritesImg.src).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5,
        imgPath: '../img/sprites/sprite.png'
    }));

    // Pipe image stream through image optimizer and onto disk
    let imgStream = spriteData.img
        .pipe(gulp.dest(paths.spritesImg.dist));

    // Pipe CSS stream through CSS optimizer and onto disk
    let stylStream = spriteData.css
        .pipe(gulp.dest(paths.spritesImg.out));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, stylStream);
});
