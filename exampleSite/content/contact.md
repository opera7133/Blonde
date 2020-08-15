+++
title = "Contact"
description = "Hugo, the world's fastest framework for building websites"
date = "2019-02-30"
aliases = ["contact"]
author = "Hugo Authors"
+++

{{< rawhtml >}}
<div class="content"><p>To contact us, please fill out the form below.</p>
<form name='contact' method='post' action="https://formspree.io/">
    <div class="cp_iptxt">
        <input type="text" placeholder="Your Name" name="name" required>
    </div>
    <div class="cp_iptxt">
        <input type="text" placeholder="Email Address" name="mail" required>
    </div>
    <div class="cp_iptxt">
        <input type="text" placeholder="Subject" name="title" required>
    </div>
    <div class="cp_iptxt">
        <textarea rows="5" cols="30" placeholder="Message" name="message" required></textarea>
    </div>
    <input type="submit" value="Submit" class="bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded w-full">
</form></div>
{{< /rawhtml >}}
