import axios from 'axios';
import cheerio from 'cheerio';

interface ProductData {
title: string;
url: string;
description: string;
images: string[];
price: string;
category: string;
}

export async function fetchData(url: string): Promise<ProductData> {
try {
const response = await axios.get(url);
const $ = cheerio.load(response.data);

const productData: ProductData = {
title: $('h1.product-title').text(),
url: url,
description: $('div.product-description').text(),
images: $('img.product-image').map((i, el) => $(el).attr('src')).get(),
price: $('span.product-price').text(),
category: $('span.product-category').text(),
};

return productData;
} catch (error) {
throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
}
}