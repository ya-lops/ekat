document.addEventListener("alpine:init", () => {
  Alpine.store("favStore"), Alpine.store("favCountStore");
});

function ekat() {
  return {
    requestCalcDialogOpen: false,
    btnLabel: "Заказать",
    formTitle: "Заявка",
    
    init() {
      items = JSON.parse(localStorage.favorites || "[]");
      count = JSON.parse(localStorage.favoritesCount || 0);

      Alpine.store("favStore", items);
      Alpine.store("favCountStore", count);
    },

    product() {
      return {
        inFav: false,

        init() {
          Alpine.store("favStore", items);
          const product = {};
          product.slug = this.$el.dataset.slug;

          if (Alpine.store("favStore").some((e) => e.slug === product.slug)) {
            this.inFav = true;
          }
        },
      };
    },

    toFav() {
      const product = {};
      product.slug = this.$el.dataset.slug;
      product.name = this.$el.dataset.name;
      product.image = this.$el.dataset.image;

      if (!Alpine.store("favStore").some((e) => e.slug === product.slug)) {
        this.inFav = true;
        items.push(product);
        count = ++count;
        this.updateStorage();
      } else {
        items = Alpine.store("favStore").filter((e) => e.slug !== product.slug);
        count = Alpine.store("favCountStore") - 1;
        this.inFav = false;
        this.updateStorage();
        this.products = items;
      }
    },

    updateStorage() {
      localStorage.setItem("favorites", JSON.stringify(items));
      localStorage.setItem("favoritesCount", count);
      Alpine.store("favStore", items);
      Alpine.store("favCountStore", count);
    },

    clearStorage() {
      localStorage.setItem("favorites", []);
      localStorage.setItem("favoritesCount", 0);
      Alpine.store("favStore", []);
      Alpine.store("favCountStore", 0);
    },

    getCartCount() {
      return Alpine.store("favCountStore") > 0
        ? Alpine.store("favCountStore")
        : "";
    },
  };
}
