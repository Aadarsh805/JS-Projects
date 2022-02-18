
        const card = document.querySelector("#card")

        let rule = CSSRulePlugin.getRule(".card::before")
        let rule2 = CSSRulePlugin.getRule(".card::after")

        let tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })

        tl.to(rule, {
            width: "100%"
        })

        tl.to(rule2, {
            width: "100%"
        }, "-=.3")
        tl.to("h1", {
            color: 'white'
        }, "-=.7")
        tl.to('p', {
            'clipPath': 'circle(140% at 0% 100%)',  
            'transform': 'trasnlateX(0)'
        }, "-=.3")

        tl.pause()

        card.addEventListener("mouseenter", () => {
            tl.play()
        })
        card.addEventListener("mouseleave", () => {
            tl.reverse()
        })