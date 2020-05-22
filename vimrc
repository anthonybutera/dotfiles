"Use double quotes to comment lines out in .vimrc


" Vim-Plug
call plug#begin('~/.vim/plugged')

" Scripts
  Plug 'junegunn/vim-plug'
  Plug 'scrooloose/nerdtree'
  Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
  Plug 'junegunn/fzf.vim'
  Plug 'BurntSushi/ripgrep'
  Plug 'itchyny/lightline.vim'
  Plug 'vim-scripts/AutoComplPop'

" Colorschemes
  Plug 'morhetz/gruvbox'
  Plug 'kristijanhusak/vim-hybrid-material'
  Plug 'jacoborus/tender.vim'
  Plug 'gosukiwi/vim-atom-dark'

call plug#end()


" set leader key and color scheme
let g:mapleader="\<Space>"
" colorscheme gruvbox

syntax on                     " Enables syntax highlighing
highlight Comment ctermfg=green
set background=dark
set showcmd
set showmatch
set ignorecase
set smartcase
set incsearch
set relativenumber
set wildmenu
set ruler
set hidden                    " Required to keep multiple buffers open multiple buffers
set encoding=utf-8            " The encoding displayed 
set pumheight=10              " Makes popup menu smaller
set fileencoding=utf-8        " The encoding written to file
set cmdheight=1               " More space for displaying messages
set iskeyword+=-              " treat dash separated words as a word text object"
set mouse=a                   " Enable your mouse
set splitbelow                " Horizontal splits will automatically be below
set splitright                " Vertical splits will automatically be to the right
set t_Co=256                  " Support 256 colors
set conceallevel=0            " So that I can see `` in markdown files
set tabstop=2                 " Insert 2 spaces for a tab
set shiftwidth=2              " Change the number of space characters inserted for indentation
set smarttab                  " Makes tabbing smarter will realize you have 2 vs 4
set expandtab                 " Converts tabs to spaces
set smartindent               " Makes indenting smart
set autoindent                " Good auto indent
set laststatus=2              " Always display the status line
set cursorline                " Enable highlighting of the current line
set cursorcolumn              " Enable highlighting of the current column
set showtabline=2             " Always show tabs 
set noshowmode                " We don't need to see things like -- INSERT -- anymore
set nobackup                  " This is recommended by coc
set nowritebackup             " This is recommended by coc
set noswapfile                " Same as nobackup
set autoread                  " Autoread
set updatetime=250            " Faster completion
set timeoutlen=500            " By default timeoutlen is 1000 ms
set clipboard=unnamedplus     " Copy paste between vim and everything else
set scrolloff=10						  " Keeps 10 lines above or below visible while scrolling
set termguicolors             " Sets TrueColor to ON
" set spell! spelllang=en_us 


" Colorschemes
" ============
map ! :colorscheme gruvbox<CR>               " https://github.com/morhetz/gruvbox
map @ :colorscheme vim-material<CR>          " https://github.com/kristijanhusak/vim-hybrid-material
map # :colorscheme tender<CR>                " https://github.com/jacoborus/tender.vim
map $ :colorscheme atom-dark-256<CR>         " https://github.com/gosukiwi/vim-atom-dark


" Keybindings
" ===========

" Page 1/2 Up 
nnoremap <S-j> <C-d>


" Page 1/2 Down 
nnoremap <S-k> <C-u>


" Page Down Full
nnoremap <C-j> <C-f>


" Page Up Full
nnoremap <C-k> <C-b>



" Miscellaneous
" =============

" Disable flow control
map <C-s> <Nop>


" Go to the beginning of the line
nnoremap gh 0


" Go to the end of the line
nnoremap gl $


" Copy to the end of the line, no whitespace
map Y y$


" Alternate way to writeout
nnoremap <leader>w :w<CR>


" Alternate way to save
nnoremap <leader>s :x<CR>


" Alternate way to quit
nnoremap <leader>q :q!<CR>


" Alternate way to split buffers
nnoremap <leader>sv      :vsp<CR>
nnoremap <leader>sh      :sp<CR>
nnoremap <leader>ls      :ls<CR>


" Escape real quick
inoremap jk <Esc>
inoremap kj <Esc>
nnoremap <C-c> <Esc>


" Better window navigation
nnoremap <leader>h <C-w>h
nnoremap <leader>j <C-w>j
nnoremap <leader>k <C-w>k
nnoremap <leader>l <C-w>l


"NerdTreeToggle
map <leader>e :NERDTreeToggle / <CR>
let g:NERDTreeWinPos = "right"
let g:NERDTreeWinSize = "45"


" Fuzzy Finder
nnoremap <leader>f :Files<CR>
nnoremap <leader>b :Buffers<CR>




