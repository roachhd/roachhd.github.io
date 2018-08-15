---
layout: post
title: The HTML Email Boilerplate
category: Email
tags: [design, html5, responsive, marketing]
share: true
comments: true
featured: true
---
With web development there are lots of common tasks that we do over and over again. This is where it's helpful to work with tools that make our lives easier, this can be Server-side frameworks, HTML project boilerplates and HTML email boilerplates. 

Some of the most popular boilerplates you would of heard of are Twitter bootstrap and HTML5 boilerplate. These projects are both available on Github for you to fork and modify for your own use and both are very useful projects to use when you first start any new website project.

One of the problems that web developers have is getting email newsletters to look correct in most of email clients. This is where the HTML email boilerplate can be useful, it will provide you with helpful code snippets to aid in developing all your HTML emails. This will take care of the correct doctype to use, how to reset the styling to work in all clients, how to display images correctly and how to style HTML tables to align correctly in your email.



###HTML Doctype

While many email clients will strip out the doctype, it's good practice to add a doctype so that when we are testing we know that the HTML will render correctly. When popular clients remove the doctype from the email it will be replaced by XHTML 1.0 strict doctype, this is why we make sure we set it as XHTML 1.0 strict.


'''
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
'''


###Images

The HTML boilerplate will help you in setting up your images correctly, if you have links around your images then a border will be placed around the images, adding these styles will remove all borders around your images.


'''
    <style>
      img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;} 
      a img {border:none;} 
      .image_fix {display:block;}
    </style>

    <img class="image_fix" src="full path to image" alt="Your alt text" title="Your title text" width="x" height="x" />
 '''


###Tables

The HTML boilerplate gives you a starting point to deal with tables, this will provide you with a starting point of defaults to use on your table to avoid any formatting problems.



''' <style>
    #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
    </style>
'''



'''<table cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
        <tr>
            <td>
                 <table cellpadding="0" cellspacing="0" border="0" align="center">
                     <tr>
                          <td width="200" valign="top"></td>
                          <td width="200" valign="top"></td>
                          <td width="200" valign="top"></td>
                    </tr>
                </table> 
            </td>
        </tr>
    </table>
 '''




###Resetting Your Styles

Use the following snippet to reset the styles in the email clients, this will also help with font sizes on mobile devices.


'''
    /* Client-specific Styles */
    #outlook a {padding:0;} /* Force Outlook to provide a "view in browser" menu link. */
    body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;} 
    /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */ 
    .ExternalClass {width:100%;} /* Force Hotmail to display emails at full width */  
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-     height: 100%;} /* Force Hotmail to display normal line spacing. */
    #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
    p { margin: 1em 0; }
    /* End reset */
    
 '''



Use the HTML boilerplate the next time you need to create a HTML email newsletter.


[DOWNLOAD THE BOILERPLATE](https://github.com/seanpowell/Email-Boilerplate/zipball/master)>



<script src="https://gist.github.com/roachhd/12f0ba1aa6fed83033d8.js"></script>


Resources and information taken from the [HTMLemailboilerplate.com](http://htmlemailboilerplate.com/) website.
